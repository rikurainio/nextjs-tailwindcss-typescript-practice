import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { BsDiscord, BsTwitter } from 'react-icons/bs'

const Navbar: React.FunctionComponent = (): JSX.Element => {
    return (
        <div className={'bg-none flex-col fixed z-50 top-0 left-0 overflow-hidden h-full border-erasion-drk1 border-opacity-20'}>
            <div className="flex-col">
                <div className="mt-7">
                    <Image className="rotate-90 -translate-x-1" alt='erasion logo' src='/ergw.png' width='130' height='130'></Image>
                </div>
                <div className="-mt-4">
                    <Image className="rotate-90 -scale-x-1 -translate-x-1" alt='erasion logo' src='/ergc.png' width='130' height='130'></Image>
                </div>
                <div className="cursor-pointer">
                    <a href='https://www.discord.com/invite/pR4DgC82'>
                        <BsDiscord className="text-erasion-wht w-full h-7 mt-120"/>
                    </a>
                </div>
                <div className="cursor-pointer">
                    <a href='https://www.twitter.com/erasion_gaming'>
                        <BsTwitter className="text-erasion-wht w-full h-7 mt-3"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export { Navbar };