# `cause_referout`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cause_referout_id | varchar(5) | NO | PRI |  |  |  |
| cause_referout_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | cause_referout_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cause_referout_id": "01",
    "cause_referout_name": "เกินศักยภาพ เพื่อวินิจฉัย/รักษา"
  },
  {
    "cause_referout_id": "02",
    "cause_referout_name": "เกินศักยภาพ  ขาดแพทย์เฉพาะทาง"
  },
  {
    "cause_referout_id": "03",
    "cause_referout_name": "เกินศักยภาพ ขาดอุปกรณ์เครื่องม"
  },
  {
    "cause_referout_id": "04",
    "cause_referout_name": "เกินศักยภาพ เพื่อผ่าตัด"
  },
  {
    "cause_referout_id": "05",
    "cause_referout_name": "เกินศักยภาพ เพื่อชันสูตร"
  },
  {
    "cause_referout_id": "06",
    "cause_referout_name": "เกินศักยภาพ ไปตามนัด"
  },
  {
    "cause_referout_id": "07",
    "cause_referout_name": "มีศักยภาพ  รักษาต่อตามสิทธิ์"
  },
  {
    "cause_referout_id": "08",
    "cause_referout_name": "มีศักยภาพ  ญาติ/ผู้ป่วยต้องการ"
  }
]
```
