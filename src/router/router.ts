export interface RouteType {
    path:string,
    element?:any,
}
const routes:RouteType[] = [
    {
        path:"/examples/overali",
        element:() => import("@/views/Examples/overallView")
    },
    {
        path:"/test/modeling",
        element:() => import("@/views/Test/modeling")
    }
]
export default routes