# `ovst_icf_level_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_icf_level_type_id | int(11) | NO | PRI | 0 |  |  |
| ovst_icf_type_name | varchar(200) | YES | UNI | NULL |  |  |
| ovst_icf_level_type_name | varchar(200) | YES | UNI | NULL |  |  |
| export_code | varchar(20) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_ovst_icf_level_type_name | ovst_icf_level_type_name | yes | 1 |
| ix_ovst_icf_type_name | ovst_icf_type_name | yes | 1 |
| PRIMARY | ovst_icf_level_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "ovst_icf_level_type_id": 1,
    "ovst_icf_type_name": null,
    "ovst_icf_level_type_name": "ไม่มีความบกพร่อง (NO)",
    "export_code": "0",
    "hos_guid": null
  },
  {
    "ovst_icf_level_type_id": 2,
    "ovst_icf_type_name": null,
    "ovst_icf_level_type_name": "มีความบกพร่องเล็กน้อย (MILD)",
    "export_code": "1",
    "hos_guid": null
  },
  {
    "ovst_icf_level_type_id": 3,
    "ovst_icf_type_name": null,
    "ovst_icf_level_type_name": "มีความบกพร่องปานกลาง (MODERATE)",
    "export_code": "2",
    "hos_guid": null
  },
  {
    "ovst_icf_level_type_id": 4,
    "ovst_icf_type_name": null,
    "ovst_icf_level_type_name": "มีความบกพร่องรุนแรง (SEVERE)",
    "export_code": "3",
    "hos_guid": null
  },
  {
    "ovst_icf_level_type_id": 5,
    "ovst_icf_type_name": null,
    "ovst_icf_level_type_name": "มีความบกพร่องทั้งหมด (COMPLETE)",
    "export_code": "4",
    "hos_guid": null
  },
  {
    "ovst_icf_level_type_id": 6,
    "ovst_icf_type_name": null,
    "ovst_icf_level_type_name": "มีความบกพร่องที่ไม่ระบุรายละเอียด (Not specified)",
    "export_code": "8",
    "hos_guid": null
  },
  {
    "ovst_icf_level_type_id": 7,
    "ovst_icf_type_name": null,
    "ovst_icf_level_type_name": "ไม่เกี่ยวข้อง (Not applicable)",
    "export_code": "9",
    "hos_guid": null
  }
]
```
