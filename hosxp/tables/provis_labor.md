# `provis_labor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "code": "11",
    "name": "ต่างด้าวที่ขึ้นทะเบียนกับกระทรวงมหาดไทย และ มีเลข 13 หลัก ที่ขึ้นด้วยเลข 6,7",
    "hos_guid": null
  },
  {
    "code": "12",
    "name": "ต่างด้าวที่ขึ้นทะเบียนกับกระทรวงแรงงานเพื่อขอทำงาน ที่มีรหัสที่ขึ้นต้นด้วยเลข 0 และได้ Work permitted",
    "hos_guid": null
  },
  {
    "code": "13",
    "name": "ต่างด้าวที่ขึ้นทะเบียนกับกระทรวงมหาดไทย ที่มีรหัสที่ขึ้นต้นด้วยเลข 0",
    "hos_guid": null
  },
  {
    "code": "14",
    "name": "ต่างด้าวที่ขออนุญาตทำงานถูกต้องตามกฎหมายกับกระทรวงแรงงาน โดยมี Passport Visa เป็นหลักฐานในการขออนุญาต",
    "hos_guid": null
  },
  {
    "code": "21",
    "name": "ต่างด้าวที่อพยพและอยู่ในค่าย/ศูนย์พักพิง",
    "hos_guid": null
  },
  {
    "code": "22",
    "name": "ต่างด้าวที่ติดตามรหัส 11 และ 12 ได้แก่ สามี ภรรยา บุตร ญาติ",
    "hos_guid": null
  },
  {
    "code": "23",
    "name": "หมายถึงกลุ่มอื่นๆ",
    "hos_guid": null
  }
]
```
