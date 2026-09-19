# `work_plan_kpis`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| kpi_code | varchar(80) | YES | MUL | NULL |  |  |
| title | varchar(600) | NO |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| category_id | int | YES | MUL | NULL |  |  |
| bsc_dimension_key | varchar(50) | YES |  | NULL |  |  |
| owner_type | enum('organization','department','person') | NO | MUL | organization |  |  |
| owner_dep_index | tinyint | YES |  | NULL |  |  |
| owner_dep_id | int | YES |  | NULL |  |  |
| owner_gtw_user_id | int | YES |  | NULL |  |  |
| unit | varchar(100) | YES |  | NULL |  |  |
| direction | enum('higher_better','lower_better','exact') | NO |  | higher_better |  |  |
| frequency | varchar(20) | NO |  | monthly |  |  |
| source_type | varchar(50) | NO |  | manual |  |  |
| source_config_json | longtext | YES |  | NULL |  |  |
| target_value | decimal(14,4) | YES |  | NULL |  |  |
| weight | decimal(8,2) | NO |  | 0.00 |  |  |
| sort_order | int | NO |  | 0 |  |  |
| warning_threshold | decimal(8,2) | YES |  | 80.00 |  |  |
| success_threshold | decimal(8,2) | YES |  | 100.00 |  |  |
| status | enum('draft','active','archived') | NO | MUL | active |  |  |
| revision_no | int | NO |  | 1 |  |  |
| source_change_request_id | int | YES |  | NULL |  |  |
| created_by | int | YES |  | NULL |  |  |
| updated_by | int | YES |  | NULL |  |  |
| deleted_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | NO |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_plan_kpi_category | category_id | no | 1 |
| idx_plan_kpi_category | bsc_dimension_key | no | 2 |
| idx_plan_kpi_code | kpi_code | no | 1 |
| idx_plan_kpi_owner | owner_type | no | 1 |
| idx_plan_kpi_owner | owner_dep_index | no | 2 |
| idx_plan_kpi_owner | owner_dep_id | no | 3 |
| idx_plan_kpi_owner | owner_gtw_user_id | no | 4 |
| idx_plan_kpi_status | status | no | 1 |
| idx_plan_kpi_status | deleted_at | no | 2 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "id": 1,
    "kpi_code": "KPI001",
    "title": "มาตรการรักษาความปลอดภัยไซเบอร์",
    "description": null,
    "category_id": null,
    "bsc_dimension_key": "internal",
    "owner_type": "organization",
    "owner_dep_index": null,
    "owner_dep_id": null,
    "owner_gtw_user_id": null,
    "unit": "โครงการ",
    "direction": "higher_better",
    "frequency": "monthly",
    "source_type": "manual",
    "source_config_json": null,
    "target_value": "1.0000",
    "weight": "2.00",
    "sort_order": 0,
    "warning_threshold": "80.00",
    "success_threshold": "100.00",
    "status": "active",
    "revision_no": 2,
    "source_change_request_id": 3,
    "created_by": 253,
    "updated_by": 253,
    "deleted_at": null,
    "created_at": "2026-04-25 00:11:36",
    "updated_at": "2026-04-25 17:10:36"
  }
]
```
