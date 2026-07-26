# `provis_vehicle`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(2) | NO | PRI |  |  |  |
| name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "01",
    "name": "จักรยานและสามล้อถีบ"
  },
  {
    "code": "02",
    "name": "จักรยานยนต์"
  },
  {
    "code": "03",
    "name": "สามล้อเครื่อง"
  },
  {
    "code": "04",
    "name": "รถยนต์นั่ง/แท็กซี่"
  },
  {
    "code": "05",
    "name": "รถปิกอัพ"
  },
  {
    "code": "06",
    "name": "รถตู้"
  },
  {
    "code": "07",
    "name": "รถโดยสารสองแถว"
  },
  {
    "code": "08",
    "name": "รถโดยสารใหญ่ (รถบัส รถเมล์)"
  }
]
```
