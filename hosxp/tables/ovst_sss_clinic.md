# `ovst_sss_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sss_clinic_code | char(3) | NO | PRI |  |  |  |
| sss_clinic_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sss_clinic_name | sss_clinic_name | yes | 1 |
| PRIMARY | sss_clinic_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sss_clinic_code": "010",
    "sss_clinic_name": "โรคเบาหวาน"
  },
  {
    "sss_clinic_code": "020",
    "sss_clinic_name": "โรคความดันโลหิตสูง"
  },
  {
    "sss_clinic_code": "03A",
    "sss_clinic_name": "โรคตับอักเสบเรื้อรัง"
  },
  {
    "sss_clinic_code": "03B",
    "sss_clinic_name": "โรคตับแข็ง"
  },
  {
    "sss_clinic_code": "040",
    "sss_clinic_name": "โรคหัวใจล้มเหลว"
  },
  {
    "sss_clinic_code": "050",
    "sss_clinic_name": "โรคเส้นเลือดสมองแตก/อุดตัน"
  },
  {
    "sss_clinic_code": "060",
    "sss_clinic_name": "โรคมะเร็ง"
  },
  {
    "sss_clinic_code": "070",
    "sss_clinic_name": "โรคภูมิคุ้มกันบกพร่อง"
  }
]
```
