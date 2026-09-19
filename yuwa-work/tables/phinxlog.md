# `phinxlog`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| version | bigint | NO | PRI | NULL |  |  |
| migration_name | varchar(100) | YES |  | NULL |  |  |
| start_time | timestamp | YES |  | NULL |  |  |
| end_time | timestamp | YES |  | NULL |  |  |
| breakpoint | tinyint(1) | NO |  | 0 |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | version | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "version": 20250121000001,
    "migration_name": "YuwaWork",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000002,
    "migration_name": "RolesMenu",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000003,
    "migration_name": "AccessLogs",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000004,
    "migration_name": "SystemLogs",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000005,
    "migration_name": "CustomApps",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000006,
    "migration_name": "Favorites",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000007,
    "migration_name": "TablePreferences",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  },
  {
    "version": 20250121000008,
    "migration_name": "DashboardSettings",
    "start_time": "2026-06-23 09:37:43",
    "end_time": "2026-06-23 09:37:43",
    "breakpoint": 0
  }
]
```
