import {  FooterCopyright,Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
      <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
      <FooterCopyright site_name={AppConfig.site_name} />
      </div>
      <div style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://beian.miit.gov.cn" style={{ color: '#22d3ee', textDecoration: 'none',fontSize:'14px' }}>
              黔ICP备2022005951号-1
          </a>
      </div>
  </Section>
);

export { Footer };
