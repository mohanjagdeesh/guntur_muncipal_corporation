import React from 'react'
import { Tree, TreeNode } from 'react-organizational-chart';


const OrganisationalChart = ({data}:{data:any}) => {
  return (
    <div className=' overflow-x-auto border-2 border-violet py-4'>
    {data?.map((main)=>(
        <Tree  
        lineWidth={'4px'}
        lineColor={'red'}
        lineBorderRadius={'6px'}
         label={<div className='bg-violet text-white text-[1.1rem] font-semi-bold w-[200px] mx-auto p-2 leading-none'>{main.name}</div>}>
            {
                main.children?.map((sub)=>(
                    <TreeNode label={<div className='bg-violet text-white text-[1.1rem] font-semi-bold w-[200px] mx-auto p-2 leading-none'>{sub.name}</div>}>
                        {
                            sub.children?.map((subChild)=>(
                                <TreeNode label={<div className='bg-violet text-white text-[1.1rem] font-semi-bold w-[200px] mx-auto p-2 leading-none'>{subChild.name}</div>}>
                                    {
                                        subChild.children?.map((mainGrandChild)=>(
                                            <TreeNode label={<div className='bg-violet text-white text-[1.1rem] font-semi-bold w-[200px] mx-auto p-2 leading-none'>{mainGrandChild.name}</div>}>
                                                {
                                                    mainGrandChild.children?.map((subGrandChild)=>(
                                                        <TreeNode label={<div className='bg-violet text-white text-[1.1rem] font-semi-bold w-[200px] mx-auto p-2 leading-none'>{subGrandChild.name}</div>}>
                                                            {
                                                                subGrandChild.children?.map((finalChild)=>(
                                                                    <TreeNode label={<div className='bg-violet text-white text-[1.1rem] font-semi-bold w-[200px] mx-auto p-2 leading-none'>{finalChild.name}</div>} />
                                                                ))
                                                            }
                                                        </TreeNode>
                                                    ))
                                                }
                                            </TreeNode>
                                        ))
                                    }
                                </TreeNode>
                            ))
                        }
                    </TreeNode>
                ))
            }
        </Tree>
    ))}
    </div>
  )
}

export default OrganisationalChart;