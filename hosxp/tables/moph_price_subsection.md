# `moph_price_subsection`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_price_subsection_code | varchar(5) | NO | PRI |  |  |  |
| moph_price_category_code | char(1) | YES | MUL | NULL |  |  |
| subsection_no | varchar(10) | YES |  | NULL |  |  |
| subsection_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_category | moph_price_category_code | no | 1 |
| PRIMARY | moph_price_subsection_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "moph_price_subsection_code": "A00",
    "moph_price_category_code": "A",
    "subsection_no": "7.0",
    "subsection_name": "ค่าบริการทางด้านวิสัญญี"
  },
  {
    "moph_price_subsection_code": "C01",
    "moph_price_category_code": "C",
    "subsection_no": "11.1",
    "subsection_name": "11.1 การประเมินและการตรวจวินิจฉัย (Assessment and evaluation)"
  },
  {
    "moph_price_subsection_code": "C02",
    "moph_price_category_code": "C",
    "subsection_no": "11.2",
    "subsection_name": "11.2 สุขภาพจิตศึกษา (Psychoeducation)"
  },
  {
    "moph_price_subsection_code": "C03",
    "moph_price_category_code": "C",
    "subsection_no": "11.3",
    "subsection_name": "11.3 การให้คำปรึกษา (Counseling)"
  },
  {
    "moph_price_subsection_code": "C04",
    "moph_price_category_code": "C",
    "subsection_no": "11.4",
    "subsection_name": "11.4 การส่งเสริมพัฒนาการและการฝึกทักษะเฉพาะด้าน  (Stimulation and Training)"
  },
  {
    "moph_price_subsection_code": "C05",
    "moph_price_category_code": "C",
    "subsection_no": "11.5",
    "subsection_name": "11.5 พฤติกรรมบำบัด (Behavior therapy)"
  },
  {
    "moph_price_subsection_code": "C06",
    "moph_price_category_code": "C",
    "subsection_no": "11.6",
    "subsection_name": "11.6 จิตบำบัด (Psychotherapy)"
  },
  {
    "moph_price_subsection_code": "C07",
    "moph_price_category_code": "C",
    "subsection_no": "11.7",
    "subsection_name": "11.7 ครอบครัวบำบัด (Family therapy)"
  }
]
```
