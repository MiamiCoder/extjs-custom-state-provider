using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MySql.Data.MySqlClient;

namespace WebUI.Class.Article_Grid.grid_stateful_server_csharp_backend
{
    public class StatefulGridExampleController : ApiController
    {
        private string connString = "server=127.0.0.1;uid=root;pwd=root;database=extjs-training;";

        public Dictionary<string, string> Get(string userId)
        {
            Dictionary<string, string> stateData = new Dictionary<string, string>();

            using (MySqlConnection cn = new MySqlConnection(connString))
            {
                using (MySqlCommand cmd = new MySqlCommand())
                {
                    cmd.CommandText = "SELECT state_key, state_value FROM `extjs-training`.`app_state` WHERE state_user_id = '" + userId + "'";
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.Connection = cn;
                    cn.Open();

                    MySqlDataReader reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        stateData.Add(reader.GetString("state_key"), reader.GetString("state_value"));
                    }

                    cn.Close();

                }
            }

            return stateData;
        }

        public Dictionary<string, string> Post(StateData stateData)
        {
            int count = 0;

            using (MySqlConnection cn = new MySqlConnection(connString))
            {
                using (MySqlCommand cmd = new MySqlCommand())
                {
                    cmd.CommandText = string.Format("SELECT COUNT(id) FROM `extjs-training`.`app_state`  where state_user_id = '{0}' and state_key = '{1}'", stateData.UserId, stateData.Key);
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.Connection = cn;
                    cn.Open();

                    object countObject = cmd.ExecuteScalar();
                    count = int.Parse(countObject.ToString());

                    if (count > 0)
                    {
                        cmd.CommandText = string.Format("update `extjs-training`.`app_state` set state_value = '{0}' where state_user_id = '{1}' and state_key = '{2}'",
                            stateData.Value, stateData.UserId, stateData.Key);
                    } else {
                        cmd.CommandText = string.Format("insert into `extjs-training`.`app_state` (state_user_id, state_key, state_value) values ('{0}', '{1}', '{2}')",
                            stateData.UserId, stateData.Key, stateData.Value);
                    }

                    cmd.CommandType = System.Data.CommandType.Text;

                    cmd.ExecuteNonQuery();

                    cn.Close();
                }
            }
            Dictionary<string, string> result = new Dictionary<string, string>();
            result.Add("success", "true");
            return result;
        }

        public Dictionary<string, string> Delete(string userId, string key)
        {
            using (MySqlConnection cn = new MySqlConnection(connString))
            {
                using (MySqlCommand cmd = new MySqlCommand())
                {
                    cmd.CommandText = string.Format("delete FROM `extjs-training`.`app_state` WHERE state_user_id ='{0}' and state_key = '{1}'",
                        userId, key);
                    cmd.CommandType = System.Data.CommandType.Text;
                    cmd.Connection = cn;
                    cn.Open();

                    cmd.ExecuteNonQuery();

                    cn.Close();
                }
            }

            Dictionary<string, string> result = new Dictionary<string, string>();
            result.Add("success", "true");
            return result;
        }
    }
}
