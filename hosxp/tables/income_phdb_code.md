# `income_phdb_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| income_phdb_code | varchar(15) | NO | PRI |  |  |  |
| income_phdb_name | varchar(250) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_income_phdb_name | income_phdb_name | yes | 1 |
| PRIMARY | income_phdb_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "income_phdb_code": "01000001",
    "income_phdb_name": "จ่ายยาผู้ป่วยนอก"
  },
  {
    "income_phdb_code": "01000002",
    "income_phdb_name": "จ่ายยาผู้ป่วยใน (Daily dose)"
  },
  {
    "income_phdb_code": "01000003",
    "income_phdb_name": "Aseptic Dispensary TPN (Total Parenteral Nutrition)\n(คิดค่าเฉลี่ยต่อรายการยา)"
  },
  {
    "income_phdb_code": "01000004",
    "income_phdb_name": "Cytotoxic drug (คิดค่าเฉลี่ยต่อใบสั่งยา)"
  },
  {
    "income_phdb_code": "01000005",
    "income_phdb_name": "Tele pharmacy"
  },
  {
    "income_phdb_code": "01000006",
    "income_phdb_name": "การบริบาลทางเภสัชกรรมทั่วไป\n"
  },
  {
    "income_phdb_code": "01000007",
    "income_phdb_name": "การบริบาลทางเภสัชกรรมเชิงลึกเฉพาะทาง\n"
  },
  {
    "income_phdb_code": "01000008",
    "income_phdb_name": "เยี่ยมบ้าน (ทางเภสัชกรรม)"
  }
]
```
