<?php
require APPPATH . 'libraries/REST_Controller.php';
     
class Juego extends REST_Controller {
    
	  /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function __construct() {
       parent::__construct();
       $this->load->database();
    }
       
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
	public function index_get($id = 0){
        if(!empty($id)){
            $data = $this->db->get_where("juego", ['id' => $id])->row_array();
        }else{
            $data = $this->db->get("juego")->result();
        }
     
        $this->response($data, REST_Controller::HTTP_OK);
	}
      
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_post(){
        $input = $this->input->post();
        $this->db->insert('juego',$input);
     
        $this->response(['Juego Creado'], REST_Controller::HTTP_OK);
    } 
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_put($id){
        $input = $this->put();
        $this->db->update('juego', $input, array('id'=>$id));
     
        $this->response(['Juego Editado'], REST_Controller::HTTP_OK);
    }
     
    /**
     * Get All Data from this method.
     *
     * @return Response
    */
    public function index_delete($id){
        $this->db->delete('juego', array('id'=>$id));
       
        $this->response(['Juego eliminado'], REST_Controller::HTTP_OK);
    }
    	
}
?>