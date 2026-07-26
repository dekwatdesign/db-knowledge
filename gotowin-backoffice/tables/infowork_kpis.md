# `infowork_kpis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| KPIS_ID | int | NO | PRI | NULL | auto_increment |  |
| KPIS_CODE | varchar(50) | YES |  | NULL |  |  |
| KPIS_NAME | varchar(600) | YES |  | NULL |  |  |
| ACTIVE | enum('True','Fales') | YES |  | True |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | KPIS_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "KPIS_ID": 1,
    "KPIS_CODE": "KPI-Inventory-001",
    "KPIS_NAME": "ระยะเวลาในการดำเนินการสรรหาบุคคลเข้ารับราชการ (กรณีการสอบแข่งขัน)",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 22:42:03",
    "created_at": "2020-09-27 22:23:47"
  },
  {
    "KPIS_ID": 2,
    "KPIS_CODE": "KPI-Inventory-002",
    "KPIS_NAME": "ระยะเวลาในการดำเนินการสรรหาบุคคลเข้ารับราชการ (กรณีการคัดเลือก)",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 22:42:19",
    "created_at": "2020-09-27 22:24:24"
  },
  {
    "KPIS_ID": 3,
    "KPIS_CODE": "KPI-Inventory-003",
    "KPIS_NAME": "ระยะเวลาในการดำเนินการสรรหาบุคคลเข้ารับราชการ (กรณีการนำรายชื่อฯ)",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 22:42:30",
    "created_at": "2020-09-27 22:24:46"
  },
  {
    "KPIS_ID": 4,
    "KPIS_CODE": "KPI-Inventory-004",
    "KPIS_NAME": "ร้อยละความถูกต้องของการจัดทำคำสั่งบรรจุและแต่งตั้งบุคคลเข้ารับราชการ",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 22:42:39",
    "created_at": "2020-09-27 22:25:06"
  },
  {
    "KPIS_ID": 5,
    "KPIS_CODE": "KPI-Inventory-005",
    "KPIS_NAME": "ระดับความสำเร็จของการจัดทำข้อมูลประวัติ (ก.พ. 7) ของข้าราชการใหม่",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 22:42:50",
    "created_at": "2020-09-27 22:26:00"
  },
  {
    "KPIS_ID": 6,
    "KPIS_CODE": "KPI-Inventory-006",
    "KPIS_NAME": "ระยะเวลาเฉลี่ยของการบันทึกข้อมูลทะเบียนประวัติใน ก.พ. 7",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 22:43:01",
    "created_at": "2020-09-27 22:26:28"
  },
  {
    "KPIS_ID": 7,
    "KPIS_CODE": "KPI-Inventory-007",
    "KPIS_NAME": "ร้อยละความถูกต้องของการบันทึกข้อมูลทะเบียนประวัติใน ก.พ. 7",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 22:43:13",
    "created_at": "2020-09-27 22:26:46"
  },
  {
    "KPIS_ID": 8,
    "KPIS_CODE": "KPI-Inventory-008",
    "KPIS_NAME": "ระยะเวลาของการจัดทำประกาศหลักเกณฑ์และวิธีการประเมินผลการปฏิบัติราชการ",
    "ACTIVE": "True",
    "updated_at": "2020-09-27 22:43:22",
    "created_at": "2020-09-27 22:27:09"
  }
]
```
