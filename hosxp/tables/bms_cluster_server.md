# `bms_cluster_server`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bms_cluster_server_id | int(11) | NO | PRI | 0 |  |  |
| cluster_ip_address | varchar(150) | YES | UNI | NULL |  |  |
| cluster_root_password | varchar(250) | YES |  | NULL |  |  |
| is_primary_server | char(1) | YES |  | NULL |  |  |
| current_cpu_load | double(15,3) | YES |  | NULL |  |  |
| current_mysql_load | int(11) | YES |  | NULL |  |  |
| last_active_datetime | datetime | YES |  | NULL |  |  |
| cluster_master_ip_address | varchar(150) | YES |  | NULL |  |  |
| cluster_node_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| wsrep_cluster_state_uuid | varchar(50) | YES |  | NULL |  |  |
| wsrep_cluster_conf_id | int(11) | YES |  | NULL |  |  |
| wsrep_cluster_size | int(11) | YES |  | NULL |  |  |
| wsrep_cluster_status | varchar(50) | YES |  | NULL |  |  |
| wsrep_ready | varchar(10) | YES |  | NULL |  |  |
| wsrep_connected | varchar(10) | YES |  | NULL |  |  |
| wsrep_local_state_comment | varchar(10) | YES |  | NULL |  |  |
| wsrep_local_recv_queue_avg | double(15,6) | YES |  | NULL |  |  |
| wsrep_flow_control_paused | double(15,6) | YES |  | NULL |  |  |
| wsrep_cert_deps_distance | double(15,5) | YES |  | NULL |  |  |
| wsrep_local_send_queue_avg | double(15,6) | YES |  | NULL |  |  |
| wsrep_local_recv_queue_max | int(11) | YES |  | NULL |  |  |
| wsrep_local_recv_queue_min | int(11) | YES |  | NULL |  |  |
| wsrep_provider_version | varchar(50) | YES |  | NULL |  |  |
| threads_connected | int(11) | YES |  | NULL |  |  |
| created_tmp_disk_tables | int(11) | YES |  | NULL |  |  |
| handler_read_first | int(11) | YES |  | NULL |  |  |
| innodb_buffer_pool_wait_free | int(11) | YES |  | NULL |  |  |
| key_reads | int(11) | YES |  | NULL |  |  |
| max_used_connections | int(11) | YES |  | NULL |  |  |
| open_tables | int(11) | YES |  | NULL |  |  |
| select_full_join | int(11) | YES |  | NULL |  |  |
| slow_queries | int(11) | YES |  | NULL |  |  |
| uptime | int(11) | YES |  | NULL |  |  |
| innodb_rows_inserted | int(11) | YES |  | NULL |  |  |
| innodb_rows_deleted | int(11) | YES |  | NULL |  |  |
| innodb_rows_updated | int(11) | YES |  | NULL |  |  |
| innodb_rows_read | int(11) | YES |  | NULL |  |  |
| wsrep_provider_options | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cluster_ip_address | cluster_ip_address | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bms_cluster_server_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
