# `work_projects`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int | NO | PRI | NULL | auto_increment |  |
| project_code | varchar(50) | YES |  | NULL |  | รหัสโครงการ |
| project_name | varchar(255) | NO |  | NULL |  | ชื่อโครงการ |
| description | text | YES |  | NULL |  | รายละเอียด |
| owner_id | int | NO | MUL | NULL |  | เจ้าของโครงการ (gtw_user_id) |
| department_id | int | YES | MUL | NULL |  | หน่วยงาน |
| start_date | date | YES | MUL | NULL |  | วันที่เริ่ม |
| end_date | date | YES |  | NULL |  | วันที่สิ้นสุด |
| status | enum('planning','active','on_hold','completed','cancelled') | YES | MUL | planning |  |  |
| budget | decimal(15,2) | YES |  | NULL |  | งบประมาณ |
| actual_cost | decimal(15,2) | YES |  | NULL |  | ค่าใช้จ่ายจริง |
| progress_pct | int | YES |  | 0 |  | ความคืบหน้า 0-100 |
| created_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED |  |
| updated_at | datetime | YES |  | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| idx_dates | start_date | no | 1 |
| idx_dates | end_date | no | 2 |
| idx_department | department_id | no | 1 |
| idx_owner | owner_id | no | 1 |
| idx_status | status | no | 1 |
| PRIMARY | id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
