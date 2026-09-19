# `work_external_services`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| title | varchar(255) | NO |  | NULL |  |  |
| url | text | NO |  | NULL |  |  |
| logo_path | varchar(255) | YES |  | NULL |  |  |
| share_level | varchar(50) | NO | MUL | private |  |  |
| owner_dep0_id | int | NO |  | 0 |  |  |
| owner_dep1_id | int | NO |  | 0 |  |  |
| owner_dep2_id | int | NO |  | 0 |  |  |
| created_by | int | NO | MUL | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |
| is_active | char(1) | NO | MUL | Y |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_work_external_services_created_by | created_by | no | 1 |
| idx_work_external_services_is_active | is_active | no | 1 |
| idx_work_external_services_share_level | share_level | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "id": 1,
    "title": "DMH ictservice",
    "url": "https://ictservice.dmh.go.th/",
    "logo_path": "./uploads/external_services/external_service_1_20260410114329_dff0b7ba_drop_logo.png",
    "share_level": "dep",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_by": 253,
    "created_at": "2026-04-10 11:43:29",
    "updated_at": "2026-04-10 11:43:46",
    "is_active": "Y"
  },
  {
    "id": 2,
    "title": "DMH Apps Register",
    "url": "https://apps.dmh.go.th/",
    "logo_path": "./uploads/external_services/external_service_2_20260422163553_1afb0dd0_drop_logo.png",
    "share_level": "dep",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_by": 253,
    "created_at": "2026-04-22 16:35:53",
    "updated_at": "2026-04-22 16:36:03",
    "is_active": "Y"
  },
  {
    "id": 3,
    "title": "WORK D (Email)",
    "url": "https://workd.go.th/",
    "logo_path": "./uploads/external_services/external_service_3_20260422170355_e83f2112_2026-04-22_165103.png",
    "share_level": "all",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_by": 253,
    "created_at": "2026-04-22 17:03:55",
    "updated_at": "2026-04-22 17:03:55",
    "is_active": "Y"
  },
  {
    "id": 4,
    "title": "E-Saraban",
    "url": "https://saraban.egov.go.th/",
    "logo_path": "./uploads/external_services/external_service_4_20260422170606_20e30b7c_2026-04-22_170545.png",
    "share_level": "all",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_by": 253,
    "created_at": "2026-04-22 17:06:06",
    "updated_at": "2026-04-22 17:06:06",
    "is_active": "Y"
  },
  {
    "id": 5,
    "title": "E-Office",
    "url": "https://eoffice.dmh.go.th",
    "logo_path": "./uploads/external_services/external_service_5_20260422170657_b1c140bc_drop_logo.png",
    "share_level": "all",
    "owner_dep0_id": 6,
    "owner_dep1_id": 13,
    "owner_dep2_id": 25,
    "created_by": 253,
    "created_at": "2026-04-22 17:06:57",
    "updated_at": "2026-04-22 17:06:57",
    "is_active": "Y"
  }
]
```
