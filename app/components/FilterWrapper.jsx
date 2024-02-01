const FilterWrapper = () => {
  return (
    <section className="px-[1.9rem] py-[2.5rem] bg-[#fff] basis-[30rem]">
      <div className="first_filterBy">
        <h5>Related Categories</h5>
        <ul className="category_main_list">
          <li className="main_category">Men&apos;s fashion</li>
          <ul>
            <li>Men&apos;s Jacket</li>
            <li>Men&apos;s T-Shirts</li>
            <li>Casual Shirts</li>
            <li>Summer T-Shirts</li>
          </ul>
        </ul>
      </div>
    </section>
  );
};

export default FilterWrapper;
