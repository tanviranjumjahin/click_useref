import React from 'react'
import Badge from './Badge'
import { FaHeart,FaShoppingCart  } from "react-icons/fa";
import ProductOne from '../assets/ProductOne.jpg'
import Image from './Image';
import Flex from './Flex';
import { BsArrowRepeat } from "react-icons/bs";
import Heading from './Heading';



const Product = () => {
  return (
      <>
    <Badge badgeName={"New"} className={'absolute top-[25px] left-[25px]'}/>
    <Image imgsrc={ProductOne}/>
    <div className="p-5 bg-white invisible group-hover:visible absolute bottom-[24px] left-0 w-full ">
    <Flex className={"justify-end items-center gap-x-2"}>
    Add to Wish List<FaHeart />
    </Flex>
    <Flex className={"justify-end items-center gap-x-2"}>
    Compare<BsArrowRepeat />
    </Flex>
    <Flex className={"justify-end items-center gap-x-2"}>
    Add to Cart<FaShoppingCart />
    </Flex>
    </div>
    <Flex className={'justify-between'}>
        <Heading as={'h3'} text={"Basic Crew Neck Tee"} />
        <Heading as={'h3'} text={"$44.00"} />
    </Flex>
      </>
  )
}

export default Product

