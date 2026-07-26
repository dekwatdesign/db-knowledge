# `physic_group`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_group_id | int(11) | NO | PRI | 0 |  |  |
| physic_group_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| physic_group_display_order | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_physic_group_name | physic_group_name | yes | 1 |
| PRIMARY | physic_group_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "physic_group_id": 1,
    "physic_group_name": "กายภาพบำบัด",
    "hos_guid": null,
    "active_status": null,
    "physic_group_display_order": null
  },
  {
    "physic_group_id": 2,
    "physic_group_name": "อาชีวบำบัด",
    "hos_guid": null,
    "active_status": null,
    "physic_group_display_order": null
  },
  {
    "physic_group_id": 3,
    "physic_group_name": "กายอุปกรณ์",
    "hos_guid": null,
    "active_status": null,
    "physic_group_display_order": null
  },
  {
    "physic_group_id": 4,
    "physic_group_name": "พยาบาลฟื้นฟู",
    "hos_guid": null,
    "active_status": null,
    "physic_group_display_order": null
  },
  {
    "physic_group_id": 5,
    "physic_group_name": "การแก้ไขการพูด",
    "hos_guid": null,
    "active_status": null,
    "physic_group_display_order": null
  },
  {
    "physic_group_id": 6,
    "physic_group_name": "กระตุ้นพัฒนาการ",
    "hos_guid": null,
    "active_status": null,
    "physic_group_display_order": null
  },
  {
    "physic_group_id": 7,
    "physic_group_name": "กิจกรรมบำบัด",
    "hos_guid": null,
    "active_status": null,
    "physic_group_display_order": null
  },
  {
    "physic_group_id": 8,
    "physic_group_name": "จิตบำบัดรายบุคคล",
    "hos_guid": null,
    "active_status": null,
    "physic_group_display_order": null
  }
]
```
