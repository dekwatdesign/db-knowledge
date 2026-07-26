# `supplies_money_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| MONEY_GROUP_ID | int | NO | PRI | NULL | auto_increment |  |
| MONEY_GROUP_NAME | varchar(255) | YES |  |  |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | MONEY_GROUP_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "MONEY_GROUP_ID": 1,
    "MONEY_GROUP_NAME": "งบบุคลากร"
  },
  {
    "MONEY_GROUP_ID": 2,
    "MONEY_GROUP_NAME": "งบดำเนินงาน (ค่าตอนแทน)"
  },
  {
    "MONEY_GROUP_ID": 3,
    "MONEY_GROUP_NAME": "งบดำเนินงาน (ค่าใช้สอย)"
  },
  {
    "MONEY_GROUP_ID": 4,
    "MONEY_GROUP_NAME": "งบดำเนินงาน (ค่าวัสดุ)"
  },
  {
    "MONEY_GROUP_ID": 5,
    "MONEY_GROUP_NAME": "งบดำเนินงาน (ค่าสาธารณูปโภค)"
  },
  {
    "MONEY_GROUP_ID": 6,
    "MONEY_GROUP_NAME": "งบลงทุน (ค่าครุภัณฑ์)"
  },
  {
    "MONEY_GROUP_ID": 7,
    "MONEY_GROUP_NAME": "งบลงทุน (ค่าที่ดินและสิ่งก่อสร้าง)"
  },
  {
    "MONEY_GROUP_ID": 8,
    "MONEY_GROUP_NAME": "งบเงินอุดหนุน"
  }
]
```
