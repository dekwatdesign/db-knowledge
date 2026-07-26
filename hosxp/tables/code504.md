# `code504`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| name | varchar(250) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "01",
    "name": "โรคติดเชื้อและปรสิต",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "02",
    "name": "เนื้องอก (รวมมะเร็ง)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "03",
    "name": "โรคเลือดและอวัยวะสร้างเลือด และความผิดปกติเกี่ยวกับภูมิคุ้มกัน ...",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "04",
    "name": "โรคเกี่ยวกับต่อมไร้ท่อ โภชนการ และเมตะบอลิสัม....",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "05",
    "name": "ภาวะแปรปรวนทางจิตและพฤติกรรม...",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "06",
    "name": "โรคระบบประสาท...",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "07",
    "name": "โรคตารวมส่วนประกอบของตา......",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "08",
    "name": "โรคหูและปุ่มกกหู.....",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
