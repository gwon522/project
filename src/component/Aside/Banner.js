import { AdBanner, BannerImage, BannerLink, BannerSpan } from "styles/Aside.style"

export const Banner = () => {
    return (
        <AdBanner>
            <BannerImage>
                <BannerLink to="/">
                    <BannerSpan>
                        블라인드 유저를 위한 <br />
                        <em>모음집</em>
                    </BannerSpan>
                </BannerLink>
            </BannerImage>
        </AdBanner>
    )
}