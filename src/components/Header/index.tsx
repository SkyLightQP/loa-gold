import type { Component } from 'solid-js';
import GoldImage from '../../assets/gold.png';

const Header: Component = () => {
  return (
    <div>
      <h1 class="flex flex-row items-center space-x-1 text-xl font-black leading-5">
        <img src={GoldImage} width={28} alt="로스크아크 골드 이미지" />
        <span>LostArk Gold</span>
      </h1>
      <p class="text-sm">레이드 획득 재화와 재료를 확인해보세요.</p>
    </div>
  );
};

export default Header;
