# `informcom_org`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ORG_CODE | varchar(5) | NO | PRI |  |  |  |
| ORG_NAME | varchar(200) | YES |  |  |  |  |
| ORG_WEBSITE | varchar(100) | YES |  |  |  |  |
| ORG_LEADER | varchar(100) | YES |  |  |  |  |
| ORG_POSITION_LEADER | varchar(100) | YES |  |  |  |  |
| ORG_LOGO | longblob | YES |  | NULL |  |  |
| ORG_ADDRESS | varchar(200) | YES |  |  |  |  |
| ORG_PHONE | varchar(255) | YES |  |  |  |  |
| ORG_FAX | varchar(50) | YES |  |  |  |  |
| ORG_EMAIL | varchar(50) | YES |  |  |  |  |
| ORG_PCODE | varchar(10) | YES |  |  |  |  |
| ORG_ADMIN | varchar(100) | YES |  |  |  |  |
| ORG_FACEBOOK | varchar(255) | YES |  |  |  |  |
| ORG_LINE | varchar(255) | YES |  |  |  |  |
| ORG_COM_HR_ID | varchar(10) | YES |  |  |  | หัวหน้าคอม |
| ORG_PR_HR_ID | varchar(10) | YES |  |  |  | หัวหน้างานประกัน |
| HR_DEPARTMENT_SUB_SUB_ID | int | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ORG_CODE | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
