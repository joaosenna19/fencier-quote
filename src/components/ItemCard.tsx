import { CardContent, CardTitle, Card } from "@/components/ui/card"
import Image from "next/image"

export default function ItemCard() {
  return (
    <div className="max-w-md mx-auto">
      <Card className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <Image
          alt="Product Image"
          className="w-full h-[300px] object-cover rounded-t-md"
          height={400}
          src="/icons/constructor-logo.png"
          style={{
            aspectRatio: "600/400",
            objectFit: "cover",
          }}
          width={600}
        />
        <CardTitle className="p-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">Summer Collection T-Shirt</h3>
          </div>
        </CardTitle>
        <CardContent>
          <div>
          <span className="text-2xl font-bold">$49.99</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}