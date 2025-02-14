import { getImageAddress } from "@/data"

type Props = {
    params: Promise<{ id: string }>
  }
  
  export async function generateMetadata({ params }: Props) {
    const id = (await params).id as string
    return {
      title: `Page with id ${id}`,
      description: `Some description for page with ID ${id}`,
      openGraph: {
        images: await getImageAddress(),
      },
    }
  }

export default function Page() {
    return <div>Subpage</div>
}