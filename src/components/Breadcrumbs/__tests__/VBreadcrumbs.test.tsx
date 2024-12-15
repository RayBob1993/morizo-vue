import { VBreadcrumbs } from '../';
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('VBreadcrumbs.vue', () => {
  const breadcrumbs = [
    { title: 'Главная', url: '/' },
    { title: 'Продукты', url: '/products' },
    { title: 'Электроника', url: '/products/electronics' }
  ];

  it('Проверка отрисовки', () => {
    const wrapper = mount(() => (
      <VBreadcrumbs breadcrumbs={breadcrumbs}/>
    ));

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.classes()).toContain('v-breadcrumbs');
  });

  it('Тест на количество хлебных крошек', () => {
    const wrapper = mount(() => (
      <VBreadcrumbs breadcrumbs={breadcrumbs}/>
    ));

    const items = wrapper.findAll('.v-breadcrumbs__item');

    expect(items.length).toBe(breadcrumbs.length);
  });

  it('Тест на последний элемент, что он не ссылка', () => {
    const wrapper = mount(() => (
      <VBreadcrumbs breadcrumbs={breadcrumbs}/>
    ));

    const links = wrapper.findAll('nuxt-link');

    expect(links.length).toBe(breadcrumbs.length - 1);
  });
});
