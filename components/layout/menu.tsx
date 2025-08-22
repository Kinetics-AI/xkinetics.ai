import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"



export function Menu() {
    return (
        <DrawerContent className='pt-12 pb-6 px-64 min-w-96'>
            <DrawerHeader className="w-96">
                <DrawerTitle>
                    Subscribe to WeChat Public Accountsdwqdwea 
                    <br></br>
                    關注微信公眾號
                </DrawerTitle>
            </DrawerHeader>
            <DrawerFooter></DrawerFooter>
        </DrawerContent>
    )
}
