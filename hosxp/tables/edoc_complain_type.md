# `edoc_complain_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_complain_type_id | int(11) | NO | PRI | 0 |  |  |
| edoc_complain_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_complain_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "edoc_complain_type_id": 1,
    "edoc_complain_type_name": "นํ้าประปา/ไฟฟ้า"
  },
  {
    "edoc_complain_type_id": 2,
    "edoc_complain_type_name": "กลิ่น/เสียง/สัตว์เลี้ยง"
  },
  {
    "edoc_complain_type_id": 3,
    "edoc_complain_type_name": "สวนฯ/ตัดแต่งต้นไม้"
  },
  {
    "edoc_complain_type_id": 4,
    "edoc_complain_type_name": "ขยะ/ความสะอาด"
  },
  {
    "edoc_complain_type_id": 5,
    "edoc_complain_type_name": "การศึกษา/โรงเรียน"
  },
  {
    "edoc_complain_type_id": 6,
    "edoc_complain_type_name": "เก็บภาษี/ธรรมเนียม"
  },
  {
    "edoc_complain_type_id": 7,
    "edoc_complain_type_name": "ถนน/ป้ายจราจร"
  },
  {
    "edoc_complain_type_id": 8,
    "edoc_complain_type_name": "กีฬา/ประชาสัมพันธ์/กิจกรรม"
  }
]
```
