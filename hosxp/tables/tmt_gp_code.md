# `tmt_gp_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| gp_code | varchar(10) | NO | PRI |  |  |  |
| gp_name | varchar(250) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | gp_name | no | 1 |
| PRIMARY | gp_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "gp_code": "842370",
    "gp_name": "90Y-ibritumomab tiuxetan 3.2 mg/2 mL solution for injection (GP)"
  },
  {
    "gp_code": "882297",
    "gp_name": "A/new caledonia/20/99 (H1N1) like strain derived used IVR-116 15 mcg/500 mcL + A/wellington/1/2004(IVR-139) 15 mcg/500 mcL + B/shanghai/361/2002 like strain used B/jiangsu/10/2003 15 mcg/500 mcL solution for injection (GP)"
  },
  {
    "gp_code": "842423",
    "gp_name": "abacavir 100 mg/5 mL syrup (GP)"
  },
  {
    "gp_code": "1197033",
    "gp_name": "abacavir 20 mg/1 mL oral solution (GP)"
  },
  {
    "gp_code": "465145",
    "gp_name": "abacavir 300 mg + lamivudine 150 mg + zidovudine 300 mg film-coated tablet (GP)"
  },
  {
    "gp_code": "662401",
    "gp_name": "abacavir 300 mg film-coated tablet (GP)"
  },
  {
    "gp_code": "1002394",
    "gp_name": "abacavir 600 mg + dolutegravir 50 mg + lamivudine 300 mg film-coated tablet (GP)"
  },
  {
    "gp_code": "355375",
    "gp_name": "abacavir 600 mg + lamivudine 300 mg film-coated tablet (GP)"
  }
]
```
