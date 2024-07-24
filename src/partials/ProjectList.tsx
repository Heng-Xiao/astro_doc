import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        我的 <GradientText>产品</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="程序猿代码之路"
        description="一个基于VuePress等技术的网站，「Java + Python + 大数据 + 前端 + 开源项目」一份涵盖大部分程序猿所需要掌握的核心知识。准备突击面试，帮助程序猿在代码之路上越走越远！首选 CoderRoad ！"
        link="https://coderroad.cn/"
        img={{
          src: 'https://coderroad.cn/logo.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>VuePress</Tags>
              <Tags color={ColorTags.EMERALD}>百度统计</Tags>
          </>
        }
      />
      <Project
        name="智慧礼金"
        description="一款专为管理婚礼、庆典或特殊场合收送礼金而设计的微信小程序。它提供简洁明了的界面，让用户能够轻松记录礼金收入和支出，同时追踪赠送者和接收者的信息。无论是为了确保礼仪的周到，还是为了方便日后的答谢，这个小程序都是您理想的选择。"
        link="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08d60ff0139d4172a0fdbf2b91c03102~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=258&h=258&s=53649&e=jpg&b=fdfcfc"
        img={{ src: 'https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/08d60ff0139d4172a0fdbf2b91c03102~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=258&h=258&s=53649&e=jpg&b=fdfcfc', alt: 'Project Fire' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>MP-CU</Tags>
            <Tags color={ColorTags.EMERALD}>阿里云 Serverless</Tags>
            <Tags color={ColorTags.YELLOW}>Echarts</Tags>
          </>
        }
      />
      <Project
        name="智享小库"
        description="“汇集智慧、分享成长”，欢迎来到“智享小库”一个为知识分享而生的平台。无论你是学者、教师、学生，还是对特定领域充满热情的业余爱好者，这里都是你探索无限知识世界的绝佳去处。

【智享小库】100T+网盘资源大合集，包含开源项目源码、可视化大屏模板源码、考公考研、教资教招、建工考证、财会考证、医学考试、电子书籍、影音娱乐等各类资料，应有尽有、每天更新。"
        link="https://files.mdnice.com/user/64619/bfc9e839-55c4-4d3a-b107-1f8463c786c9.jpg"
        img={{ src: 'https://files.mdnice.com/user/64619/bfc9e839-55c4-4d3a-b107-1f8463c786c9.jpg', alt: 'Project Maps' }}
        category={
          <>
              <Tags color={ColorTags.VIOLET}>MP-CU</Tags>
              <Tags color={ColorTags.EMERALD}>阿里云 Serverless</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
