import { IntegerSelect } from "@/components/Elements/Inputs/IntegerSelect";
import React from "react";
import { UseFormReturn } from "react-hook-form";

const options = [
  { value: 2022, label: "2022年（令和4年）" },
  { value: 2021, label: "2021年（令和3年）" },
  { value: 2020, label: "2020年（令和2年）" },
  { value: 2019, label: "2019年（平成31年／令和元年）" },
  { value: 2018, label: "2018年（平成30年）" },
  { value: 2017, label: "2017年（平成29年）" },
  { value: 2016, label: "2016年（平成28年）" },
  { value: 2015, label: "2015年（平成27年）" },
  { value: 2014, label: "2014年（平成26年）" },
  { value: 2013, label: "2013年（平成25年）" },
  { value: 2012, label: "2012年（平成24年）" },
  { value: 2011, label: "2011年（平成23年）" },
  { value: 2010, label: "2010年（平成22年）" },
  { value: 2009, label: "2009年（平成21年）" },
  { value: 2008, label: "2008年（平成20年）" },
  { value: 2007, label: "2007年（平成19年）" },
  { value: 2006, label: "2006年（平成18年）" },
  { value: 2005, label: "2005年（平成17年）" },
  { value: 2004, label: "2004年（平成16年）" },
  { value: 2003, label: "2003年（平成15年）" },
  { value: 2002, label: "2002年（平成14年）" },
  { value: 2001, label: "2001年（平成13年）" },
  { value: 2000, label: "2000年（平成12年）" },
  { value: 1999, label: "1999年（平成11年）" },
  { value: 1998, label: "1998年（平成10年）" },
  { value: 1997, label: "1997年（平成9年）" },
  { value: 1996, label: "1996年（平成8年）" },
  { value: 1995, label: "1995年（平成7年）" },
  { value: 1994, label: "1994年（平成6年）" },
  { value: 1993, label: "1993年（平成5年）" },
  { value: 1992, label: "1992年（平成4年）" },
  { value: 1991, label: "1991年（平成3年）" },
  { value: 1990, label: "1990年（平成2年）" },
  { value: 1989, label: "1989年（昭和64年／平成元年）" },
  { value: 1988, label: "1988年（昭和63年）" },
  { value: 1987, label: "1987年（昭和62年）" },
  { value: 1986, label: "1986年（昭和61年）" },
  { value: 1985, label: "1985年（昭和60年）" },
  { value: 1984, label: "1984年（昭和59年）" },
  { value: 1983, label: "1983年（昭和58年）" },
  { value: 1982, label: "1982年（昭和57年）" },
  { value: 1981, label: "1981年（昭和56年）" },
  { value: 1980, label: "1980年（昭和55年）" },
  { value: 1979, label: "1979年（昭和54年）" },
  { value: 1978, label: "1978年（昭和53年）" },
  { value: 1977, label: "1977年（昭和52年）" },
  { value: 1976, label: "1976年（昭和51年）" },
  { value: 1975, label: "1975年（昭和50年）" },
  { value: 1974, label: "1974年（昭和49年）" },
  { value: 1973, label: "1973年（昭和48年）" },
  { value: 1972, label: "1972年（昭和47年）" },
  { value: 1971, label: "1971年（昭和46年）" },
  { value: 1970, label: "1970年（昭和45年）" },
  { value: 1969, label: "1969年（昭和44年）" },
  { value: 1968, label: "1968年（昭和43年）" },
  { value: 1967, label: "1967年（昭和42年）" },
  { value: 1966, label: "1966年（昭和41年）" },
  { value: 1965, label: "1965年（昭和40年）" },
  { value: 1964, label: "1964年（昭和39年）" },
  { value: 1963, label: "1963年（昭和38年）" },
  { value: 1962, label: "1962年（昭和37年）" },
  { value: 1961, label: "1961年（昭和36年）" },
  { value: 1960, label: "1960年（昭和35年）以前" },
];

interface Props {
  name: string;
  form: UseFormReturn<any, any>;
}

export const BuildingYearSelect: React.FC<Props> = ({ name, form }) => {
  return (
    <IntegerSelect
      name={name}
      form={form}
      placeholder="未選択"
      options={options}
    />
  );
};
