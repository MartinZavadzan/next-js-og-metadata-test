import { getImageAddress } from "@/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const id = (await params).id as string;
  return {
    twitter: {
      title: `Page with id ${id}`,
      description: `Some description for page with ID ${id}`,
      card: "summary_large_image",
      images: [await getImageAddress()],
    },
  };
}

export default function Page() {
  return <div>Subpage</div>;
}
