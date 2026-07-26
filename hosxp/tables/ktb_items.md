# `ktb_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int(11) | NO | PRI | NULL |  |  |
| Name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ID": 1,
    "Name": "การฝากครรภ์(ANC)"
  },
  {
    "ID": 2,
    "Name": "การตรวจหลังคลอด"
  },
  {
    "ID": 3,
    "Name": "บริการคัดกรองรอยโรคเสี่ยงมะเร็งและมะเร็งช่องปาก"
  },
  {
    "ID": 4,
    "Name": "การตรวจคัดกรองมะเร็งสตรี"
  },
  {
    "ID": 5,
    "Name": "บริการคัดกรองโรคมะเร็งลำไส้ใหญ่ ด้วยการตรวจอุจจาระ วิธี Fit Test"
  },
  {
    "ID": 6,
    "Name": "ทันตกรรมส่งเสริมป้องกัน ในหน่วยบริการ"
  },
  {
    "ID": 7,
    "Name": "การคัดกรองภาวะซีด"
  },
  {
    "ID": 8,
    "Name": "บริการอนามัยเจริญพันธุ์"
  }
]
```
