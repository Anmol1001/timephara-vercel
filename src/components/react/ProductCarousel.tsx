import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const productImages = [
    {source: "/images/timepharma/product/product1.jpg", alt:"product-1"},
    {source: "/images/timepharma/product/product2.jpg", alt:"product-2"},
    {source: "/images/timepharma/product/product3.jpg", alt:"product-3"},
    {source: "/images/timepharma/product/product4.jpg", alt:"product-4"},
    {source: "/images/timepharma/product/product5.jpg", alt:"product-5"},
    {source: "/images/timepharma/product/product6.jpeg", alt:"product-6"},
    {source: "/images/timepharma/product/product7.png", alt:"product-7"},
    {source: "/images/timepharma/product/product8.jpg", alt:"product-8"},
] 

export function ProductCarousel() {
  return (
    <Carousel className="w-full max-w-[1280px]">
      <CarouselContent className="-ml-1">
        {productImages.map((product, index) => (
          <CarouselItem key={index} className="lg:basis-1/3">
            <div className="p-1">
              <Card >
                <CardContent className="flex aspect-square items-center justify-center">
                  <div className=" h-[40vh] w-[50vw]"> 
                  <img src={product.source} alt={product.alt} className="h-full w-full object-contain"/>
                  </div> 
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
