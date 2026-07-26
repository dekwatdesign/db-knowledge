# `person_labor_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_labor_type_id | int(11) | NO | PRI | 0 |  |  |
| person_labor_type_name | varchar(150) | YES | UNI | NULL |  |  |
| nhso_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_labor_type_name | person_labor_type_name | yes | 1 |
| PRIMARY | person_labor_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "person_labor_type_id": 11,
    "person_labor_type_name": "ต่างด้าวที่ขึ้นทะเบียนกับกระทรวงมหาดไทยและมีเลข 13 หลักที่ขึ้นด้วยเลข 6,7",
    "nhso_code": "11",
    "hos_guid": null
  },
  {
    "person_labor_type_id": 12,
    "person_labor_type_name": "ต่างด้าวขึ้นทะเบียนกับกระทรวงแรงงานเพื่อขอทำงานที่มีรหัสขึ้นต้นด้วยเลข 0 และไม่ workpermitted",
    "nhso_code": "12",
    "hos_guid": null
  },
  {
    "person_labor_type_id": 13,
    "person_labor_type_name": "ต่างด้าวที่ขึ้นทะเบียนกับกระทรวงมหาดไทยและมีเลข 0",
    "nhso_code": "13",
    "hos_guid": null
  },
  {
    "person_labor_type_id": 14,
    "person_labor_type_name": "ต่างด้านที่ขออนุญาตทำงานถูกต้องตามกฎหมายกับกระทรวงแรงงาน โดยมี Passport Visa เป็นหลักฐานในการขออนุญาต",
    "nhso_code": "14",
    "hos_guid": null
  },
  {
    "person_labor_type_id": 21,
    "person_labor_type_name": "ต่างด้านที่อพยพและอยู่ในค่าย / ศูนย์พักพิง",
    "nhso_code": "21",
    "hos_guid": null
  },
  {
    "person_labor_type_id": 22,
    "person_labor_type_name": "ต่างด้าวที่ติดตามรหัส 11 และ 12 ได้แก่ สามี ภรรยา บุตร ธิดา",
    "nhso_code": "22",
    "hos_guid": null
  },
  {
    "person_labor_type_id": 23,
    "person_labor_type_name": "หมายถึงกลุ่มอื่นๆ",
    "nhso_code": "23",
    "hos_guid": null
  }
]
```
