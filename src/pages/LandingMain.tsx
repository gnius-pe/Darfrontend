import Content from "../sections/main/Content";
import DefaultLayout from "../layout/Defaultlayout";

export default function LandingMain(){
    return (
    <>
        <DefaultLayout>
            <div className="flex bg-white pt-14">
                <Content />
            </div>
        </DefaultLayout>
    </>
    );
}