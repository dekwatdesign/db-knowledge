# `sp_use`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sp_use | varchar(7) | NO | PRI |  |  |  |
| sp_name | varchar(150) | YES | MUL | NULL |  |  |
| name1 | varchar(150) | YES | MUL | NULL |  |  |
| name2 | varchar(150) | YES |  | NULL |  |  |
| name3 | varchar(150) | YES |  | NULL |  |  |
| user | varchar(15) | YES | MUL | NULL |  |  |
| sp_use_guid | varchar(38) | YES | MUL | NULL |  |  |
| oldcode | varchar(20) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_ix_oldcode | oldcode | no | 1 |
| ix_name1_name3_name2 | name1 | no | 1 |
| ix_name1_name3_name2 | name2 | no | 2 |
| ix_name1_name3_name2 | name3 | no | 3 |
| ix_sp_use_guid | sp_use_guid | no | 1 |
| name1_name3_name2 | name1 | no | 1 |
| name1_name3_name2 | name3 | no | 2 |
| name1_name3_name2 | name2 | no | 3 |
| PRIMARY | sp_use | yes | 1 |
| sp_name | sp_name | no | 1 |
| user | user | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "sp_use": "1000001",
    "sp_name": "*(ใช้ตามแพทย์สั่ง*** ) ใช้ตามแพทย์สั่ง",
    "name1": "1.5 ช้อนชา หลังอาหารเช้า และ",
    "name2": "3 ช้อนชา หลังอหารเย็น",
    "name3": "........................................",
    "user": "yuwa027",
    "sp_use_guid": null,
    "oldcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sp_use": "1000002",
    "sp_name": "*(ใช้ตามแพทย์สั่ง*** ) ใช้ตามแพทย์สั่ง",
    "name1": "1 เม็ด หลังอาหารเช้า",
    "name2": "..................................",
    "name3": "........................................",
    "user": "yuwa027",
    "sp_use_guid": null,
    "oldcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sp_use": "1000003",
    "sp_name": "*(ใช้ตามแพทย์สั่ง*** ) ใช้ตามแพทย์สั่ง",
    "name1": "0.5 มิลลิกรัม หลังอาหารเช้า",
    "name2": "0.75 มิลลิกรัม ก่อนนอน",
    "name3": "",
    "user": "bms",
    "sp_use_guid": null,
    "oldcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sp_use": "1000004",
    "sp_name": "*(ใช้ตามแพทย์สั่ง*** ) ใช้ตามแพทย์สั่ง",
    "name1": "1 หลังอาหารเช้า เที่ยง",
    "name2": "ครึ่ง เม็ด เวลา 15.30 น (บ่ายสามโมงครึ่ง)",
    "name3": "",
    "user": "bms",
    "sp_use_guid": null,
    "oldcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sp_use": "1000005",
    "sp_name": "*(ใช้ตามแพทย์สั่ง*** ) ใช้ตามแพทย์สั่ง",
    "name1": "0.5mgสองเวลาหลังอาหารเช้าและก่อนนอน",
    "name2": "..................................",
    "name3": "........................................",
    "user": "yuwa027",
    "sp_use_guid": null,
    "oldcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sp_use": "1000006",
    "sp_name": "*(ใช้ตามแพทย์สั่ง*** ) ใช้ตามแพทย์สั่ง",
    "name1": "2 เม็ด หลังอาหารเช้า",
    "name2": "1 เม็ด หลังอาหารเที่ยง",
    "name3": "........................................",
    "user": "yuwa027",
    "sp_use_guid": null,
    "oldcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sp_use": "1000007",
    "sp_name": "*(ใช้ตามแพทย์สั่ง*** ) ใช้ตามแพทย์สั่ง",
    "name1": "1 เม็ดครึ่ง หลังอาหาร",
    "name2": "เช้า และ เที่ยง",
    "name3": "........................................",
    "user": "yuwa027",
    "sp_use_guid": null,
    "oldcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "sp_use": "1000008",
    "sp_name": "*(ใช้ตามแพทย์สั่ง*** ) ใช้ตามแพทย์สั่ง",
    "name1": "0.5 มิลลิกรัม หลังอาหาร เช้า",
    "name2": "และ 0.6 มิลลิกรัม ก่อนนอน",
    "name3": "........................................",
    "user": "yuwa027",
    "sp_use_guid": null,
    "oldcode": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
