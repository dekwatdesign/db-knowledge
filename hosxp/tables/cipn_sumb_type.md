# `cipn_sumb_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cipn_sumb_type_id | int(11) | NO | PRI | 0 |  |  |
| cipn_sumb_type_name | varchar(200) | YES | UNI | NULL |  |  |
| cipn_sumb_type_code | varchar(10) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cipn_sumb_type_code | cipn_sumb_type_code | yes | 1 |
| ix_cipn_sumb_type_name | cipn_sumb_type_name | yes | 1 |
| PRIMARY | cipn_sumb_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "cipn_sumb_type_id": 1,
    "cipn_sumb_type_name": "ส่งแก้ไขตามที่ระบบตรวจรับเรียก (ADD)",
    "cipn_sumb_type_code": "ADD"
  },
  {
    "cipn_sumb_type_id": 2,
    "cipn_sumb_type_name": "ส่งแก้ไขตามที่ auditor เรียก (AUD)",
    "cipn_sumb_type_code": "AUD"
  },
  {
    "cipn_sumb_type_id": 3,
    "cipn_sumb_type_name": "ส่งแก้ไขเอง ไม่ได้ถูกเรียก (ADJ)",
    "cipn_sumb_type_code": "ADJ"
  },
  {
    "cipn_sumb_type_id": 4,
    "cipn_sumb_type_name": "ส่งแก้ไขตามที่ระบบตรวจรับเรียก - ยกเลิกธุรกรรม (ADDX)",
    "cipn_sumb_type_code": "ADDX"
  },
  {
    "cipn_sumb_type_id": 5,
    "cipn_sumb_type_name": "ส่งแก้ไขตามที่ auditor เรียก - ยกเลิกธุรกรรม (AUDX)",
    "cipn_sumb_type_code": "AUDX"
  },
  {
    "cipn_sumb_type_id": 6,
    "cipn_sumb_type_name": "ส่งแก้ไขเอง ไม่ได้ถูกเรียก - ยกเลิกธุรกรรม (ADJ)",
    "cipn_sumb_type_code": "ADJX"
  }
]
```
