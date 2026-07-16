export interface Blog {
  id: number;
  title: string;
  description: string;
  published_at: string;
  reading_time_minutes: number;

  slug: string;

  tag_list: string[];

  cover_image: string | null;
  social_image: string | null;

  url: string;

  positive_reactions_count: number;
  public_reactions_count: number;
  comments_count: number;
}

const USERNAME = "mohitbajaj";

export async function getBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${USERNAME}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!res.ok) return [];

    return res.json();
  } catch {
    return [];
  }
}