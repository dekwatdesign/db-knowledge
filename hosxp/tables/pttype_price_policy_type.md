# `pttype_price_policy_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_price_policy_type_id | int(11) | NO | PRI | 0 |  |  |
| pttype_price_policy_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_price_policy_type_name | pttype_price_policy_type_name | yes | 1 |
| PRIMARY | pttype_price_policy_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "pttype_price_policy_type_id": 2,
    "pttype_price_policy_type_name": "01 - ค่าห้อง/ค่าอาหาร"
  },
  {
    "pttype_price_policy_type_id": 3,
    "pttype_price_policy_type_name": "02 - อวัยวะเทียม/อุปกรณ์บำบัดรักษา"
  },
  {
    "pttype_price_policy_type_id": 4,
    "pttype_price_policy_type_name": "03 - ยาและสารอาหารทางเส้นเลือดที่ใช้ใน รพ."
  },
  {
    "pttype_price_policy_type_id": 5,
    "pttype_price_policy_type_name": "04 - ยาที่นำไปใช้ต่อที่บ้าน"
  },
  {
    "pttype_price_policy_type_id": 6,
    "pttype_price_policy_type_name": "05 - เวชภัณฑ์ที่ไม่ใช่ยา"
  },
  {
    "pttype_price_policy_type_id": 7,
    "pttype_price_policy_type_name": "06 - บริการโลหิตและส่วนประกอบของโลหิต"
  },
  {
    "pttype_price_policy_type_id": 8,
    "pttype_price_policy_type_name": "07 - ตรวจวินิจฉัยทางเทคนิคการแพทย์และพยาธิวิทยา"
  },
  {
    "pttype_price_policy_type_id": 9,
    "pttype_price_policy_type_name": "08 - ตรวจวินิจฉัยและรักษาทางรังสีวิทยา"
  }
]
```
