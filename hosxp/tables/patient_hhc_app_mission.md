# `patient_hhc_app_mission`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_hhc_app_mission_id | int(11) | NO | PRI | 0 |  |  |
| patient_hhc_app_mission_name | varchar(250) | YES |  | NULL |  |  |
| patient_hhc_disease_group_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_hhc_app_mission_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "patient_hhc_app_mission_id": 1,
    "patient_hhc_app_mission_name": "วัดความดันโลหิตในบ้านและจดบันทึก",
    "patient_hhc_disease_group_id": 1
  },
  {
    "patient_hhc_app_mission_id": 2,
    "patient_hhc_app_mission_name": "ประเมินอาการร่วม เช่น เวียนศีรษะ ปวดหัว\n\n",
    "patient_hhc_disease_group_id": 1
  },
  {
    "patient_hhc_app_mission_id": 3,
    "patient_hhc_app_mission_name": "ตรวจนับยาและซักประวัติการใช้ยา",
    "patient_hhc_disease_group_id": 1
  },
  {
    "patient_hhc_app_mission_id": 4,
    "patient_hhc_app_mission_name": "ให้ความรู้เรื่องความสำคัญของการใช้ยาอย่างสม่ำเสมอ",
    "patient_hhc_disease_group_id": 1
  },
  {
    "patient_hhc_app_mission_id": 5,
    "patient_hhc_app_mission_name": "ตรวจสภาพผิวหนังและตำแหน่งเสี่ยงแผลกดทับ",
    "patient_hhc_disease_group_id": 2
  },
  {
    "patient_hhc_app_mission_id": 6,
    "patient_hhc_app_mission_name": "แนะนำท่ากลับตัวและวิธีดูแลผู้ป่วยที่เหมาะสม",
    "patient_hhc_disease_group_id": 2
  },
  {
    "patient_hhc_app_mission_id": 7,
    "patient_hhc_app_mission_name": "สอนทักษะเบื้องต้น เช่น การทำความสะอาดร่างกาย / การเปลี่ยนผ้าอ้อม",
    "patient_hhc_disease_group_id": 2
  },
  {
    "patient_hhc_app_mission_id": 8,
    "patient_hhc_app_mission_name": "ให้คำปรึกษาเรื่องอาหารและสุขภาพจิตของผู้ป่วยและผู้ดูแล",
    "patient_hhc_disease_group_id": 2
  }
]
```
