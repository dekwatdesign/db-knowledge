# `income_csmbs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| income_csmbs_code | varchar(2) | NO | PRI |  |  |  |
| income_csmbs_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_income_csmbs_name | income_csmbs_name | yes | 1 |
| PRIMARY | income_csmbs_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "income_csmbs_code": "01",
    "income_csmbs_name": "ค่าห้องและค่าอาหาร"
  },
  {
    "income_csmbs_code": "02",
    "income_csmbs_name": "ค่าอวัยะเทียมและอุปกรณ์ในการบำบัดรักษา"
  },
  {
    "income_csmbs_code": "03",
    "income_csmbs_name": "ค่ายาและสารอาหารทางเส้นเลือดที่ใช้ใน รพ."
  },
  {
    "income_csmbs_code": "04",
    "income_csmbs_name": "ค่ายาและสารอาหารทางเส้นเลือดที่ใช้ ที่บ้าน"
  },
  {
    "income_csmbs_code": "05",
    "income_csmbs_name": "ค่าเวชภัณฑ์ที่มิใช่ยา"
  },
  {
    "income_csmbs_code": "06",
    "income_csmbs_name": "ค่าบริการโลหิตและส่วนประกอบของโลหิต"
  },
  {
    "income_csmbs_code": "07",
    "income_csmbs_name": "ค่าตรวจทางเทคนิคการแพทย์และพยาธิวิทยา"
  },
  {
    "income_csmbs_code": "08",
    "income_csmbs_name": "ค่าตรวจวินิจฉัยและรักษาทางรังสีวิทยา"
  }
]
```
