# `rfrcs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(100) | YES |  | NULL |  |  |
| rfrcs | char(1) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| export_code | varchar(5) | YES |  | NULL |  |  |
| thairefer_cs | varchar(4) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | rfrcs | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "วินิจฉัย ชัณสูตร/ส่งต่อ",
    "rfrcs": "1",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "2",
    "thairefer_cs": null
  },
  {
    "name": "ขีดความสามารถไม่เพียงพอ ด้านบุคลากร",
    "rfrcs": "2",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "1",
    "thairefer_cs": null
  },
  {
    "name": "ขีดความสามารถไม่เพียงพอ ด้านเครื่องมือ / สถานที่",
    "rfrcs": "3",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "1",
    "thairefer_cs": null
  },
  {
    "name": "ขีดความสามารถไม่เพียงพอ ด้านบุคลากร เครื่องมือ และสถานที่",
    "rfrcs": "4",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "1",
    "thairefer_cs": null
  },
  {
    "name": "ขีดความสามารถไม่เพียงพอ ด้านวิชาการ",
    "rfrcs": "5",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "1",
    "thairefer_cs": null
  },
  {
    "name": "ขีดความสามารถเพียงพอ แต่จำเป็น (เช่นผ่าตัด)",
    "rfrcs": "6",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "1",
    "thairefer_cs": null
  },
  {
    "name": "ขีดความสามารถเพียงพอ แต่ผู้ป่วย/ญาติต้องการ",
    "rfrcs": "7",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "5",
    "thairefer_cs": null
  },
  {
    "name": "ขีดความสามารถเพียงพอ แต่ต้องการใช้สิทธิ์",
    "rfrcs": "8",
    "hos_guid": null,
    "hos_guid_ext": null,
    "export_code": "5",
    "thairefer_cs": null
  }
]
```
