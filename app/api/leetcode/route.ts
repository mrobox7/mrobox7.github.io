export async function GET() {
  const username = "mrobox7";

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        submitStats {
          acSubmissionNum {
            difficulty
            count
          }
        }

        profile {
          ranking
        }
      }

      userContestRanking(username: $username) {
        rating
      }

      allQuestionsCount {
        difficulty
        count
      }
    }
  `;

  const response = await fetch(
    "https://leetcode.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          username,
        },
      }),
      next: {
        revalidate: 3600,
      },
    }
  );

  const json = await response.json();

  const solved = {
    total: 0,
    easy: 0,
    medium: 0,
    hard: 0,
  };

  for (const item of json.data.matchedUser.submitStats.acSubmissionNum) {
    switch (item.difficulty) {
      case "All":
        solved.total = item.count;
        break;
      case "Easy":
        solved.easy = item.count;
        break;
      case "Medium":
        solved.medium = item.count;
        break;
      case "Hard":
        solved.hard = item.count;
        break;
    }
  }

  const totalQuestions = {
    all: 0,
    easy: 0,
    medium: 0,
    hard: 0,
  };

  for (const item of json.data.allQuestionsCount) {
    switch (item.difficulty) {
      case "All":
        totalQuestions.all = item.count;
        break;
      case "Easy":
        totalQuestions.easy = item.count;
        break;
      case "Medium":
        totalQuestions.medium = item.count;
        break;
      case "Hard":
        totalQuestions.hard = item.count;
        break;
    }
  }

  return Response.json({
    solved,
    totalQuestions,
    ranking: json.data.matchedUser.profile.ranking,
    rating: json.data.userContestRanking?.rating ?? null,
  });
}