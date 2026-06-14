import express from 'express';
const router = express.Router();

// GET LeetCode submission calendar
router.get('/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const query = `
            query userProfileCalendar($username: String!, $year: Int) {
                matchedUser(username: $username) {
                    userCalendar(year: $year) {
                        submissionCalendar
                    }
                }
            }
        `;

        const response = await fetch('https://leetcode.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Referer': 'https://leetcode.com',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            },
            body: JSON.stringify({
                query,
                variables: { username }
            })
        });

        const data = await response.json();
        if (data.errors) {
            return res.status(400).json({ message: 'Error fetching from LeetCode', errors: data.errors });
        }

        const matchedUser = data.data?.matchedUser;
        if (!matchedUser) {
            return res.status(404).json({ message: 'User not found on LeetCode' });
        }

        const submissionCalendarStr = matchedUser.userCalendar?.submissionCalendar;
        if (!submissionCalendarStr) {
            return res.json([]);
        }

        const submissionCalendar = JSON.parse(submissionCalendarStr);
        
        // Create a map of existing submissions for quick lookup, transforming key to YYYY-MM-DD
        const submissionMap = new Map();
        Object.keys(submissionCalendar).forEach(timestamp => {
            const date = new Date(parseInt(timestamp) * 1000);
            const yyyy = date.getFullYear();
            const mm = String(date.getMonth() + 1).padStart(2, '0');
            const dd = String(date.getDate()).padStart(2, '0');
            const dateStr = `${yyyy}-${mm}-${dd}`;
            
            const count = submissionCalendar[timestamp];
            let level = 1;
            if (count > 5) level = 4;
            else if (count > 3) level = 3;
            else if (count > 1) level = 2;

            submissionMap.set(dateStr, {
                date: dateStr,
                count,
                level
            });
        });

        // Generate a full 365-day range from one year ago to today
        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);

        const allDays = [];
        let current = new Date(oneYearAgo);
        
        while (current <= today) {
            const yyyy = current.getFullYear();
            const mm = String(current.getMonth() + 1).padStart(2, '0');
            const dd = String(current.getDate()).padStart(2, '0');
            const dateStr = `${yyyy}-${mm}-${dd}`;
            
            if (submissionMap.has(dateStr)) {
                allDays.push(submissionMap.get(dateStr));
            } else {
                allDays.push({
                    date: dateStr,
                    count: 0,
                    level: 0
                });
            }
            current.setDate(current.getDate() + 1);
        }

        res.json(allDays);
    } catch (error) {
        console.error('LeetCode API error:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
});

export default router;
