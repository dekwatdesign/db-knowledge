# `drughint`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hc | varchar(4) | NO | PRI |  |  |  |
| hinttext | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| hinttext_eng | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hc | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hc": "10",
    "hinttext": "ควรแช่ตู้เย็น ยาใช้ภายนอกห้ามรับประทาน",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hinttext_eng": null
  },
  {
    "hc": "11",
    "hinttext": "ยาปฏิชีวนะ รับประทานติดต่อกันทุกวันจนยาหมด",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hinttext_eng": null
  },
  {
    "hc": "12",
    "hinttext": "เปิดยาแล้วเก็บได้นาน 1 เดือน",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hinttext_eng": null
  },
  {
    "hc": "13",
    "hinttext": "เปิดใช้นานเกิน 1 เดือนให้ทิ้งไป",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hinttext_eng": null
  },
  {
    "hc": "14",
    "hinttext": "กินติดต่อกันทุกวัน",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hinttext_eng": null
  },
  {
    "hc": "15",
    "hinttext": "กินยาติดต่อกันทุกวันจนยาหมด",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hinttext_eng": null
  },
  {
    "hc": "16",
    "hinttext": "กินเมื่อไอ มีเสมหะ หายแล้วหยุดยาได้",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hinttext_eng": null
  },
  {
    "hc": "17",
    "hinttext": "คิดราคา",
    "hos_guid": null,
    "hos_guid_ext": null,
    "hinttext_eng": null
  }
]
```
