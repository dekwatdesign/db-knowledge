# `person_dmht_manage_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_dmht_manage_type_id | int(11) | NO | PRI | 0 |  |  |
| person_dmht_manage_type_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_dmht_manage_type_name | person_dmht_manage_type_name | yes | 1 |
| PRIMARY | person_dmht_manage_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "person_dmht_manage_type_id": 1,
    "person_dmht_manage_type_name": "ให้คำแนะนำการดูแลตนเอง และตรวจคัดกรองซ้ำทุก 1 ปี",
    "hos_guid": null
  },
  {
    "person_dmht_manage_type_id": 2,
    "person_dmht_manage_type_name": "ลงทะเบียนกลุ่มเสี่ยงต่อกลุ่มโรค Metabolic และแนะนำเข้าโครงการปรับเปลี่ยนพฤติกรรม",
    "hos_guid": null
  },
  {
    "person_dmht_manage_type_id": 3,
    "person_dmht_manage_type_name": "ส่งต่อเพื่อรักษา",
    "hos_guid": null
  }
]
```
