import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          大家好, 这里是 <GradientText>程序猿代码之路</GradientText> 👋
        </>
      }
      description={
        <>
          在这里，我们分享编程技巧、开发经验和最新的技术趋势，本网站专用于写{' '}
          <a className="text-cyan-400 hover:underline" href="/posts/">
            开源项目运行文档，
          </a>{' '}
          并且分享一些相关生活、技术文章等等。项目源码获取请关注本
          {' '}
          <a className="text-cyan-400 hover:underline" href="https://coderroad.cn/weixgzhh.png">
            微信公众号
          </a>{' '}
          进行获取！
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://coderroad.cn/">
            <HeroSocial
                src="/assets/images/coderlogo.png"
                alt="Twitter icon"
            />
          </a>
{/*          <a href="/">
            <HeroSocial
              src="/assets/images/Mp-weixin.png"
              alt="Facebook icon"
            />
          </a>*/}
          <a href="https://juejin.cn/user/1192311069635703/posts">
            <HeroSocial
              src="/assets/images/掘金.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://blog.csdn.net/qq_45764938?type=blog">
            <HeroSocial
              src="/assets/images/csdn.png"
              alt="Youtube icon"
            />
          </a>

          <a href="https://github.com/Heng-Xiao">
            <HeroSocial
                src="/assets/images/github.png"
                alt="Twitter icon"
            />
          </a>
          <a href="https://gitee.com/Heng-Xiao">
            <HeroSocial
                src="/assets/images/GITEE-copy.png"
                alt="Facebook icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
