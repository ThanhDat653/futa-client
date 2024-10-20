import React from 'react'

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible'

function Page() {
    return (
        <div className="flex flex-col gap-12 bg-white pb-12 pt-8 text-base text-black sm:flex-row">
            <div className="flex flex-col sm:min-h-[450px] sm:min-w-[300px] sm:max-w-[413px]">
                <div className="pl-4 text-lg font-bold uppercase sm:pl-0">
                    Liên hệ chúng tôi
                </div>
                <Collapsible>
                    <CollapsibleTrigger>
                        Can I use this in my project?
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        Yes. Free to use for personal and commercial projects.
                        No attribution required.
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Page
